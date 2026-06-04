import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    // Removed gender from the arguments destructuring
    const signup = async ({ fullName, username, password, confirmPassword }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Sent a fallback value or removed it based on backend needs. 
                // If your backend completely removed the gender field, you can delete '"gender": "N/A"' entirely.
                body: JSON.stringify({ fullName, username, password, confirmPassword}),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // localstorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            // context
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};
export default useSignup;

// Removed gender from the validation parameters
function handleInputErrors({ fullName, username, password, confirmPassword }) {
    // Removed !gender check from this condition
    if (!fullName || !username || !password || !confirmPassword) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}