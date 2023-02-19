import SidebarItem from "./SidebarItem.js";
import navis from "./navis.js";
const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <!--a class="list-group-item" href="../navigation.html">
       <i class="fab fa-twitter"></i></a-->
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       ${navis.map(item => {
        return (SidebarItem(item, active));
    }).join('')}
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

$('#wd-sidebar-test').append(NavigationSidebar('Explore'));
