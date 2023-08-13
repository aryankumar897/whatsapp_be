import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types

const conversationSchema = mongoose.Schema({
    sender: {
      type: ObjectId,
      ref:"UserModel"
    },
    message: {
        type: "String",
        required: true,
    },
 

    conversation: {
        type: ObjectId,
        ref: "ConversationModel",

    },

   files:[],
}, {
    collection: "messages",
    timestamps: true,

})

const MessageModel =
    mongoose.model.MessageModel ||
    mongoose.model("MessageModel", conversationSchema);

export default MessageModel