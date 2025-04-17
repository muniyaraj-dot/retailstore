export const getPath = (id) => {
        const path = window.location.pathname;
        if(path === "/"){
            return "Home";
        }else if(path === "/stacks"){
            return "Stacks";
        }else if(path === "/dashboard"){
            return "Dashboard";
        }else if(path === "/settings"){
            return "Settings";
        }else if(path === `/bill/${id}`){
            return "Bill"
        }
} 