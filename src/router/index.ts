import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Overview/Overview.vue'),
    },
    {
      path: '/Overview',
      component: () => import('../views/Overview/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Overview/Overview.vue')
        },
        {
          path: 'Start',
          component: () => import('../views/Overview/Start.vue')
        },
        {
          path: 'Classes',
          component: () => import('../views/Overview/Classes.vue')
        },
        {
          path: 'Modifiers',
          component: () => import('../views/Overview/Modifiers.vue')
        },
        {
          path: 'Modular',
          component: () => import('../views/Overview/Modular.vue')
        },
        {
          path: 'responsiveness',
          component: () => import('../views/Overview/responsiveness.vue')
        },
        {
          path: 'Colors',
          component: () => import('../views/Overview/Colors.vue')
        },
       
        
      ],
    },
    {
      path: '/Customize',
      component: () => import('../views/Customize/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Customize/Customize.vue')
        },
        {
          path: 'Concepts',
          component: () => import('../views/Customize/Concepts.vue')
        },
        {
          path: 'Variables',
          component: () => import('../views/Customize/Variables.vue')
        },
        {
          path: 'WithNodeSass',
          component: () => import('../views/Customize/WithNodeSass.vue')
        },
        {
          path: 'WithSassCli',
          component: () => import('../views/Customize/WithSassCli.vue')
        },
        {
          path: 'WithWebpack',
          component: () => import('../views/Customize/WithWebpack.vue')
        },
      ]
    },
    {
      path: '/Columns',
      component: () => import('../views/Columns/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Columns/Columns.vue')
        },
        {
          path: 'Basics',
          component: () => import('../views/Columns/Basics.vue')
        },
        {
          path: 'Sizes',
          component: () => import('../views/Columns/Sizes.vue')
        },
        {
          path: 'Responsiveness',
          component: () => import('../views/Columns/Responsiveness.vue')
        },
        {
          path: 'Nesting',
          component: () => import('../views/Columns/Nesting.vue')
        },
        {
          path: 'Gap',
          component: () => import('../views/Columns/Gap.vue')
        },
        {
          path: 'Options',
          component: () => import('../views/Columns/Options.vue')
        },
      ]
    },
    {
      path: '/Form',
      component: () => import('../views/Form/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Form/Form.vue')
        },
        {
          path: 'general',
          component: () => import('../views/Form/general.vue')
        },
        {
          path: 'input',
          component: () => import('../views/Form/input.vue')
        },
        {
          path: 'textarea',
          component: () => import('../views/Form/textarea.vue')
        },
        {
          path: 'select',
          component: () => import('../views/Form/select.vue')
        },
        {
          path: 'checkbox',
          component: () => import('../views/Form/checkbox.vue')
        },
        {
          path: 'radio',
          component: () => import('../views/Form/radio.vue')
        },
        {
          path: 'file',
          component: () => import('../views/Form/file.vue')
        },
      ]
    },
    {
      path: '/Elements',
      component: () => import('../views/Elements/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Elements/Elements.vue')
        },
        {
          path: 'Block',
          component: () => import('../views/Elements/Block.vue')
        },
        {
          path: 'Box',
          component: () => import('../views/Elements/Box.vue')
        },
        {
          path: 'Button',
          component: () => import('../views/Elements/Button.vue')
        },
        {
          path: 'Content',
          component: () => import('../views/Elements/Content.vue')
        },
        {
          path: 'Delete',
          component: () => import('../views/Elements/Delete.vue')
        },
        {
          path: 'Icon',
          component: () => import('../views/Elements/Icon.vue')
        },
        {
          path: 'Image',
          component: () => import('../views/Elements/Image.vue')
        },
        {
          path: 'Notification',
          component: () => import('../views/Elements/Notification.vue')
        },
        {
          path: 'Progress',
          component: () => import('../views/Elements/Progress.vue')
        },
        {
          path: 'Table',
          component: () => import('../views/Elements/Table.vue')
        },
        {
          path: 'Tag',
          component: () => import('../views/Elements/Tag.vue')
        },
        {
          path: 'Title',
          component: () => import('../views/Elements/Title.vue')
        },
      ]
    },
    {
      path: '/Components',
      component: () => import('../views/Components/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Components/Components.vue')
        },
        {
          path: 'Breadcrumb',
          component: () => import('../views/Components/Breadcrumb.vue')
        },
        {
          path: 'Card',
          component: () => import('../views/Components/Card.vue')
        },
        {
          path: 'Dropdown',
          component: () => import('../views/Components/Dropdown.vue')
        },
        {
          path: 'Menu',
          component: () => import('../views/Components/Menu.vue')
        },
        {
          path: 'Message',
          component: () => import('../views/Components/Message.vue')
        },
        {
          path: 'Modal',
          component: () => import('../views/Components/Modal.vue')
        },
        {
          path: 'Navbar',
          component: () => import('../views/Components/Navbar.vue')
        },
        {
          path: 'Pagination',
          component: () => import('../views/Components/Pagination.vue')
        },
        {
          path: 'Panel',
          component: () => import('../views/Components/Panel.vue')
        },
        {
          path: 'Tabs',
          component: () => import('../views/Components/Tabs.vue')
        },
      ]
    },
    {
      path: '/Utilities',
      component: () => import('../views/Utilities/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Utilities/Utilities.vue')
        },
       
       
      ]
    },
    {
      path: '/Layout',
      component: () => import('../views/Layout/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Layout/Layout.vue')
        },
       
       
      ]
    },
  ]
})

export default router
