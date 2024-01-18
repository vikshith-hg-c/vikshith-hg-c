// Import necessary modules
// For Node.js, you might need to install node-fetch: npm install node-fetch
 // Remove this line if you're in a browser environment

// Function to post a message to a Slack webhook
async function postMessageToSlack(webhookUrl: string, message: string): Promise<void> {
    try {
        const payload = {
            text: "Danny Torrence left a 1 star review for your property.",
    blocks: [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: "Danny Torrence left the following review for your property:"
            }
        },
        {
            type: "section",
            block_id: "section567",
            text: {
                type: "mrkdwn",
                text: "<https://example.com|Overlook Hotel> \n :star: \n Doors had too many axe holes, guest in room 237 was far too rowdy, whole place felt stuck in the 1920s."
            },
            accessory: {
                type: "image",
                image_url: "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
                alt_text: "Haunted hotel image"
            }
        },
        {
            type: "section",
            block_id: "section789",
            fields: [
                {
                    type: "mrkdwn",
                    text: "*Average Rating*\n1.0"
                }
            ]
        }
    ]
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Message posted successfully");
    } catch (error) {
        console.error("Error posting message to Slack: ", error);
    }
}

// Example usage
const webhookUrl = 'https://hooks.slack.com/services/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';
const message = 'Hello, World!';
postMessageToSlack(webhookUrl, message);