import 'dotenv/config';

// Todo - I'm sharing the projectId just for now, The configuration should be app/organization level

export default {
    expo: {
        extra: {
            BASE_URL: process.env.BASE_URL,
            "eas": {
                "projectId": "e4137959-dd4e-40d1-bc11-09042c1830b5"
            }
        },
        android: {
            package: "com.shopeasy.com" // Replace this with your actual package name
        }
    }
};
