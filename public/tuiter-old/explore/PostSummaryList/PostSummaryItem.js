const PostSummaryItem = (item) => {
    return(`
        <div class="card wd-post">
            <div class="card-body">
                <p class="card-text">
                    <img src="${item.image}"
                         height="100px"class="float-end">
                    <span class="text-muted">
                        ${item.topic}
                    </span>
                    ${item.topic === '' ? `` : `<br/>`}
                    <strong>
                        ${item.userName}
                    </strong>
                    <span class="text-muted">
                        - ${item.time}
                    </span>
                    <br/>
                    <strong>
                        ${item.title}
                    </strong>
                </p>
            </div>
        </div>
    `);
}

export default PostSummaryItem;