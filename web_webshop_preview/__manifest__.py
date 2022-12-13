{
    'name': 'Preview',
    'category': 'Website/Website',
    "version": "15.0.0.0.0",
    'summary': 'Online product preview',
    'author': 'Tselmeg Gantuya',
    'website': 'https://www.onestein.nl',
    'depends': ['website', 'website_sale'],
    'license': 'LGPL-3',
    'data': [
        'security/ir.model.access.csv',
        'views/view.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            '/web_webshop_preview/static/lib/face_mesh/camera_utils.js',
            '/web_webshop_preview/static/lib/face_mesh/control_utils.js',
            '/web_webshop_preview/static/lib/face_mesh/drawing_utils.js',
            '/web_webshop_preview/static/lib/face_mesh/face_mesh.js',
            '/web_webshop_preview/static/src/js/preview.js',
        ],
    },

}