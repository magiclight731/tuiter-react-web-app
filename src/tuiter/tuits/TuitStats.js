import React from "react";

const TuitStats = (
    {
        tuit =  {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        },

    }
) => {
    return (
        <div className="row">
            <div className="col-3">
                {/*  The first column displays the number of replies next to a message bubble icon.  */}
                <img height={24} src="https://img.icons8.com/small/512/twitter-reply.png" alt={''}/>
                {tuit.replies}
            </div>
            <div className="col-3">
                {/*  The second column displays the number of retuits next to a retuits icon.  */}
                <img height={24} src="https://static.thenounproject.com/png/1158617-200.png" alt={''}/>
                {tuit.retuits}
            </div>
            {/*  The third column displays the number of likes next to a heart icon.
            If the tuit has been liked, the heart should render in red or empty otherwise.
            If users like a tuit, the likes count increases by one and the heart turns red.
            If they unlike the tuit, the likes count decreases by one and the heart is not red.  */}
            { tuit.liked ?
                <div className="col-3">
                    <img height={24} src="https://spng.pngfind.com/pngs/s/78-781747_leave-a-reply-cancel-reply-twitter-like-icon.png" alt={''}/>
                    {tuit.likes + 1}
                </div>
                :
                <div className="col-3">
                    <img height={24} src="https://cdn-icons-png.flaticon.com/128/8182/8182897.png" alt={''}/>
                    {tuit.likes}
                </div>
            }
            <div className="col-3">
                {/*  The last column displays a share icon.  */}
                <img height={24} src="https://w7.pngwing.com/pngs/611/878/png-transparent-social-media-computer-icons-sharethis-share-icon-famous-brand-sharing-social-media-desktop-wallpaper.png" alt={''}/>
            </div>
        </div>
    );
};

export default TuitStats;