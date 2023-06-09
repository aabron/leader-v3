import User from "../models/User.js";

//read
export const getUser = async(req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const getUserFriends = async(req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => user.findById(id))
        );
        const formattedFriends = friends.map(
            ({_id, firstName, lastName, userRole, userCompany, picturePath}) => {
                return { _id, firstName, lastName, userRole, userCompany, picturePath };
            }
        );
        res.status(200).json(formattedFriends);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
    
};

export const addRemoveFriend = async(req,res) => {
    try {
        const {id, friendId} = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId)

        if(user.userFriends.includes(friendId)){
            user.userFriends = user.userFriends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => user.findById(id))
        );
        const formattedFriends = friends.map(
            ({_id, firstName, lastName, userRole, userCompany, picturePath}) => {
                return { _id, firstName, lastName, userRole, userCompany, picturePath };
            }
        );
        res.status(200).json({formattedFriends});
    } catch (err) {
        res.status(404).json({message: err.message });
    }
}