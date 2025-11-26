import session from "express-session";


class sessioncontroler{
    static get_session_info = (req,res)=>{
        console.log(req.session);
        console.log(req.session.id);
        console.log(req.session.cookie);
        console.log(req.session.cookie.maxAge);
        console.log(req.session.cookie.originalMaxAge);
        console.log(req.sessionID);
        

        res.send("session info ..")

    }

    static delete_session = (req,res)=>{
        req.session.destroy(()=>{
        console.log(`session deleted session ${session.id}`);
        
        });
    }
}

export default sessioncontroler;