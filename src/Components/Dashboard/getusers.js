export const getUsers = async()=>{
    let users = [];
    console.log("hello")
    try {
       const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
       const resp = await response.json();
       console.log(resp,"shrey")
       users = [...resp];
    } catch (error) {
        console.log(error)
    }
    return users;
}