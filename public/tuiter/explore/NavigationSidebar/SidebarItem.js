const SidebarItem = (item, active) => {
    return(`
        <a class="list-group-item ${active===item.name ? "active" : ""}" href="${item.href}">
        <i class="${item.iclass}"></i> ${item.name}</a>
    `);
}
export default SidebarItem;