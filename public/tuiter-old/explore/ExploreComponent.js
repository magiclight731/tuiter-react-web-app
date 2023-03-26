import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="input-group p-2">
                    <span class="input-group-text wd-rounded-corners">
                        <i class="fa fa-search"></i>
                    </span>
                    <input class="wd-rounded-corners
                                  form-control"
                           placeholder="Search Tuiter">
                    <span class="input-group-text wd-rounded-corners">
                        <a href="explore-settings.html">
                            <img class="wd-float-right"
                                 src="Gear-512-1232879730.png"
                                 height="24px">
                        </a>
                    </span>
                </div>           
            </div>
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="card">
                <img src="https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/starship2520mk1_image_20190930194220.jpg"
                     class="card-img">
                <div class="card-img-overlay text-light d-flex align-items-end">
                    <h2>SpaceX's Starship</h2>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
