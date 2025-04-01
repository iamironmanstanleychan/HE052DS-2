var users = [
    { SSN: '001', name: "Steve Jobs" },
    { SSN: '002', name: "Brad Pitt" },
    { SSN: '003', name: "George Clooney" },
    { SSN: '004', name: "Jennifer Lawrence" },
    { SSN: '005', name: "Scarlett Johansson" },
    { SSN: '006', name: "Tom Cruise" }
];

var posts = [
    { postId: '001', content: "Heaven!" },
    { postId: '002', content: "Cycling" },
    { postId: '003', content: "Diving" },
    { postId: '004', content: "Fishing" },
    { postId: '005', content: "Hiking" },
    { postId: '006', content: "Ice-Skating" },
    { postId: '007', content: "Sailing" },
    { postId: '008', content: "Swimming" }
];

function fetchUserDetails(userId) {
    if (!Number.isInteger(userId) || userId <= 0) {
        return Promise.reject(new Error("Invalid userId. It must be a positive integer."));
    }
    const formattedUserId = userId.toString().padStart(3, '0');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.SSN === formattedUserId) || 'Missing Person';
            const post = posts.find(post => post.postId === formattedUserId) || 'UnDefined';
            console.log(`Starting to fetch details for user ID: ${formattedUserId}`);
            resolve({ user, post });
        }, 1500);
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUserDetailsAndPosts(userId) {
    if (!Number.isInteger(userId) || userId <= 0) {
        console.log("Invalid userId. It must be a positive integer.");
        return;
    }
    try {
        await delay(1000); // Add a 2-second delay
        const { user, post } = await fetchUserDetails(userId);
        console.log(`User Data: {SSN:"${user.SSN}", name:"${user.name}"}`);
        console.log(`User Posts: {postId:"${post.postId}",content:"${post.content}"}\n`);
    } catch (error) {
        console.log(`Error fetching user details: ${error.message}`);
    }
}

// Example usage
(async () => {
    for (let i = 1; i <= 10; i++) {
        await fetchUserDetailsAndPosts(i);
    }
})();
