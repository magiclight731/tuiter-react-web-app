const WhoToFollowListItem = (item) => {
    return(`
        <div class="list-group-item">
            <p>
                <img src="../../images/${item.avatarIcon}"
                     class="wd-avatar-circle float-start"
                     width="48px">
                <button class="wd-rounded-corners
                               mt-2
                               bg-primary
                               text-light
                               float-end">
                    Follow
                </button>
                <strong>
                    ${item.userName}
                </strong>
                <br/>
                <span class="text-muted">
                    @${item.handle}
                </span>
            </p>
        </div>
    `)
}
export default WhoToFollowListItem;