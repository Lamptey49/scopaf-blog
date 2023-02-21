import DashboardIcon from './../../../assets/icons/dashboard.svg';
import ShippingIcon from './../../../assets/icons/shipping.svg';
import ProductIcon from './../../../assets/icons/product.svg';
import UserIcon from './../../../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/admin',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/admin/new/blog',
        title: 'New Blog',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: '/admin/orders',
        title: 'Products',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/admin/profile',
        title: 'My account',
    }
]

export default sidebar_menu;