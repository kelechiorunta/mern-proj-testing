import axios from "axios";

// Function to check token validity
export const checkTokenValidity = async () => {
    try {
        // Make an API call to the server to check the token's validity
        const response = await axios.get('http://localhost:8000/auth/validate-token', {
            
            withCredentials:true// Ensure cookies are sent
        });
        
        const result = response.data.isValid
        console.log(result)

        // Check if the token is valid or expired
        if (result) {
            return true; // Token is valid
        } else {
            return false; // Token is expired or invalid
        }
    } catch (error) {
        console.error('Error checking token validity:', error);
        return false;
    }
};
