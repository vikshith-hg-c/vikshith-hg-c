import React from 'react';


export const handleButtonClick = () => {

    
    const getLocation = (): Promise<GeolocationPosition> => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error("Geolocation is not supported by your browser"));
            } else {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            }
        });
    };
     
    const postLocationToWebhook = async (url: string, data: GeolocationPosition) => {
       
        try {
            const payload = {
                "Lon": data.coords.latitude,
                "Lat": data.coords.longitude
            };
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log("Location posted successfully");
            }
             catch (error) {
            console.error("Error posting location: ", error);
            }
    };

    getLocation().then(position => {
        const webhookUrl = "https://hooks.slack.com/services/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"; // Replace with your webhook URL
        postLocationToWebhook(webhookUrl, position);
    });
}

