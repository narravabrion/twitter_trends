import { makeStyles } from "@mui/styles";


const useNavStyles = makeStyles({
    nav:{
        width:"100vw",
        // height:"4rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        background:"var(---main-color---)",
        // padding:"0.5rem"
    },
    brand:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    brandIcon:{
        color:"var(---twitter-color---)",
        '&:hover':{
            color:"var(---text-color---)",
            transform:"scale(1.1)",
            transition:"all 0.3s ease-out"
        }
    },
    socialsIcon:{
        padding:"0.4rem",
        color:"var(---white-color---)",
        '&:hover':{
            color:"var(---text-color---)",
            transform:"scale(1.1)",
            transition:"all 0.3s ease-out"
        }
    },

})

export default useNavStyles