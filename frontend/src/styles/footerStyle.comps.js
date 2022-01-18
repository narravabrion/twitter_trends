import { makeStyles } from "@mui/styles";


const useFooterStyle = makeStyles({
    footer:{
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"0.5rem",
        borderTop:"0.2rem solid var(---gray-color---)",
        color:"rgba(0,0,0,0.5)"
    }
})

export default useFooterStyle