import React, {forwardRef} from 'react'
import './Messege.css';
import { Card, CardContent, Typography} from '@material-ui/core';
const Messege = forwardRef(({messege, username}, ref) =>{
const isUser = username === messege.username;

return (
<div ref={ref} className={`messege ${isUser && 'messege_user'}`}>
<Card className={isUser ? "messege_userCard": "messege_guestCard"}>
<CardContent>

<Typography variant="h5" component="h2" color="white">
 {!isUser && `${messege.username || 'Unknown user'}: `} {messege.messege}
</Typography>

</CardContent>
</Card>
</div>
)
})
export default Messege
