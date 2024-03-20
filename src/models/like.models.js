import mongoose, { Schema } from "mongoose"

const likeSchema = new Schema(
    {
        video: {
            type: Schema.Types.ObbjectId,
            ref: "Video",
        },

        comment: {
            type: Schema.Types.ObbjectId,
            ref: "Comment",
        },

        tweet: {
            type: Schema.Types.ObbjectId,
            ref: "Tweet",
        },

        likedBy: {
            type: Schema.Types.ObbjectId,
            ref: "User",
        },
    }, {
        timestamps: true
    }
)

export const Like = mongoose.model("Like", likeSchema)