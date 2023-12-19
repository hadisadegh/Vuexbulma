import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Documentation/Documentation.vue'),
    },
    {
      path: '/documentation',
      component: () => import('../views/Documentation/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Documentation/Documentation.vue')
        },
        {
          path: 'overview',
          component: () => import('../views/Documentation/Overview/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Overview/Overview.vue')
            },
            {
              path: 'start',
              component: () => import('../views/Documentation/Overview/Start.vue')
            },
            {
              path: 'classes',
              component: () => import('../views/Documentation/Overview/Classes.vue')
            },
            {
              path: 'modifiers',
              component: () => import('../views/Documentation/Overview/Modifiers.vue')
            },
            {
              path: 'modular',
              component: () => import('../views/Documentation/Overview/Modular.vue')
            },
            {
              path: 'responsiveness',
              component: () => import('../views/Documentation/Overview/responsiveness.vue')
            },
            {
              path: 'colors',
              component: () => import('../views/Documentation/Overview/Colors.vue')
            },
           
            
          ],
        },
        {
          path: 'customize',
          component: () => import('../views/Documentation/Customize/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Customize/Customize.vue')
            },
            {
              path: 'concepts',
              component: () => import('../views/Documentation/Customize/Concepts.vue')
            },
            {
              path: 'variables',
              component: () => import('../views/Documentation/Customize/Variables.vue')
            },
            {
              path: 'withNodeSass',
              component: () => import('../views/Documentation/Customize/WithNodeSass.vue')
            },
            {
              path: 'withSassCli',
              component: () => import('../views/Documentation/Customize/WithSassCli.vue')
            },
            {
              path: 'withWebpack',
              component: () => import('../views/Documentation/Customize/WithWebpack.vue')
            },
          ]
        },
        {
          path: 'columns',
          component: () => import('../views/Documentation/Columns/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Columns/Columns.vue')
            },
            {
              path: 'basics',
              component: () => import('../views/Documentation/Columns/Basics.vue')
            },
            {
              path: 'sizes',
              component: () => import('../views/Documentation/Columns/Sizes.vue')
            },
            {
              path: 'responsiveness',
              component: () => import('../views/Documentation/Columns/Responsiveness.vue')
            },
            {
              path: 'nesting',
              component: () => import('../views/Documentation/Columns/Nesting.vue')
            },
            {
              path: 'gap',
              component: () => import('../views/Documentation/Columns/Gap.vue')
            },
            {
              path: 'options',
              component: () => import('../views/Documentation/Columns/Options.vue')
            },
          ]
        },
        {
          path: 'form',
          component: () => import('../views/Documentation/Form/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Form/Form.vue')
            },
            {
              path: 'general',
              component: () => import('../views/Documentation/Form/general.vue')
            },
            {
              path: 'input',
              component: () => import('../views/Documentation/Form/input.vue')
            },
            {
              path: 'textarea',
              component: () => import('../views/Documentation/Form/textarea.vue')
            },
            {
              path: 'select',
              component: () => import('../views/Documentation/Form/select.vue')
            },
            {
              path: 'checkbox',
              component: () => import('../views/Documentation/Form/checkbox.vue')
            },
            {
              path: 'radio',
              component: () => import('../views/Documentation/Form/radio.vue')
            },
            {
              path: 'file',
              component: () => import('../views/Documentation/Form/file.vue')
            },
          ]
        },
        {
          path: 'elements',
          component: () => import('../views/Documentation/Elements/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Elements/Elements.vue')
            },
            {
              path: 'block',
              component: () => import('../views/Documentation/Elements/Block.vue')
            },
            {
              path: 'box',
              component: () => import('../views/Documentation/Elements/Box.vue')
            },
            {
              path: 'button',
              component: () => import('../views/Documentation/Elements/Button.vue')
            },
            {
              path: 'content',
              component: () => import('../views/Documentation/Elements/Content.vue')
            },
            {
              path: 'delete',
              component: () => import('../views/Documentation/Elements/Delete.vue')
            },
            {
              path: 'icon',
              component: () => import('../views/Documentation/Elements/Icon.vue')
            },
            {
              path: 'image',
              component: () => import('../views/Documentation/Elements/Image.vue')
            },
            {
              path: 'notification',
              component: () => import('../views/Documentation/Elements/Notification.vue')
            },
            {
              path: 'progress',
              component: () => import('../views/Documentation/Elements/Progress.vue')
            },
            {
              path: 'table',
              component: () => import('../views/Documentation/Elements/Table.vue')
            },
            {
              path: 'tag',
              component: () => import('../views/Documentation/Elements/Tag.vue')
            },
            {
              path: 'title',
              component: () => import('../views/Documentation/Elements/Title.vue')
            },
          ]
        },
        {
          path: 'components',
          component: () => import('../views/Documentation/Components/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Components/Components.vue')
            },
            {
              path: 'breadcrumb',
              component: () => import('../views/Documentation/Components/Breadcrumb.vue')
            },
            {
              path: 'card',
              component: () => import('../views/Documentation/Components/Card.vue')
            },
            {
              path: 'dropdown',
              component: () => import('../views/Documentation/Components/Dropdown.vue')
            },
            {
              path: 'menu',
              component: () => import('../views/Documentation/Components/Menu.vue')
            },
            {
              path: 'message',
              component: () => import('../views/Documentation/Components/Message.vue')
            },
            {
              path: 'modal',
              component: () => import('../views/Documentation/Components/Modal.vue')
            },
            {
              path: 'navbar',
              component: () => import('../views/Documentation/Components/Navbar.vue')
            },
            {
              path: 'pagination',
              component: () => import('../views/Documentation/Components/Pagination.vue')
            },
            {
              path: 'panel',
              component: () => import('../views/Documentation/Components/Panel.vue')
            },
            {
              path: 'tabs',
              component: () => import('../views/Documentation/Components/Tabs.vue')
            },
          ]
        },
        {
          path: 'utilities',
          component: () => import('../views/Documentation/Utilities/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Utilities/Utilities.vue')
            },
            {
              path: 'mixins',
              component: () => import('../views/Documentation/Utilities/Mixins.vue')
            },
            {
              path: 'responsive-mixins',
              component: () => import('../views/Documentation/Utilities/ResponsiveMixins.vue')
            },
            {
              path: 'form-control-mixins',
              component: () => import('../views/Documentation/Utilities/FormControlMixins.vue')
            },
            {
              path: 'functions',
              component: () => import('../views/Documentation/Utilities/Functions.vue')
            },
            {
              path: 'extends',
              component: () => import('../views/Documentation/Utilities/Extends.vue')
            },
          ]
        },
        {
          path: 'layout',
          component: () => import('../views/Documentation/Layout/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Layout/Layout.vue')
            },
            {
              path: 'container',
              component: () => import('../views/Documentation/Layout/Container.vue')
            },
            {
              path: 'level',
              component: () => import('../views/Documentation/Layout/Level.vue')
            },
            {
              path: 'media-object',
              component: () => import('../views/Documentation/Layout/MediaObject.vue')
            },
            {
              path: 'hero',
              component: () => import('../views/Documentation/Layout/Hero.vue')
            },
            {
              path: 'section',
              component: () => import('../views/Documentation/Layout/Section.vue')
            },
            {
              path: 'footer',
              component: () => import('../views/Documentation/Layout/Footer.vue')
            },
            {
              path: 'tiles',
              component: () => import('../views/Documentation/Layout/Tiles.vue')
            },
           
           
           
          ]
        },
        {
          path: 'helpres',
          component: () => import('../views/Documentation/Helpers/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/Documentation/Helpers/Helpers.vue')
            },
            {
              path: 'container',
              component: () => import('../views/Documentation/Helpers/Colors.vue')
            },
            {
              path: 'level',
              component: () => import('../views/Documentation/Helpers/Spacing.vue')
            },
            {
              path: 'media-object',
              component: () => import('../views/Documentation/Helpers/Typography.vue')
            },
            {
              path: 'hero',
              component: () => import('../views/Documentation/Helpers/Visibility.vue')
            },
            {
              path: 'section',
              component: () => import('../views/Documentation/Helpers/Flexbox.vue')
            },
            {
              path: 'footer',
              component: () => import('../views/Documentation/Helpers/Other.vue')
            },
           
           
           
           
          ]
        },
      ]
    },
    
    
  ]
})

export default router
