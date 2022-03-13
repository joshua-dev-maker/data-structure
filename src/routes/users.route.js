const express = require("express");
const { v4: uuidv4 } = require("uuid");
uuidv4();

const router = express.Router();
let users = [
  {
    firstName: "John",
    lastName: "Wick",
    age: "21",
  },
  {
    firstName: "Jevan",
    lastName: "Wick",
    age: "23",
  },
];

router.get("/users", (req, res) => {
  res.send(users);
});
router.post("/addUsers", (req, res) => {
  const user = req.body;
//   const userId = uuidv4();;
  //destructuring the userId

//   const userWithId = { ...user, id:uuidv4() };
  // destructuring userWithId
  users.push({ ...user, id: uuidv4() });
  res.send(`user with the name ${user.firstName} is added to the list`);
});
router.get('/oneUser/:id',(req, res) => {
    const {id }= req.params;
    const oneUser = users.find((user)=>user.id === id);
 res.send(oneUser);
});
router.delete('/deleteUser/:id',(req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User  with id ${id} has been deleted`);
});
router.patch('/updateUser/:id',(req, res)=>{
    const { id } = req.params;
    const {firstName, lastName , age } = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName){
        user.firstName = firstName
    };
    if(lastName){
        user.lastName = lastName
    };
    if(age){
        user.age = age
    }
    res.send(`User  with id ${id} has been updated`);
})
module.exports = router;
