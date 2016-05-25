module.exports = {
    uri: 'https://[INSTANCE].service-now.com',
    application: '[APP SYS_ID]',
    mapping: 'snsyncmapping.json',
    types: {
        'sys_script': {js: 'script', ts: 'u_typescript'}, 
        'sys_script_include': {js: 'script', ts: 'u_typescript'}
    },
    auth: {
        user: '',
        password: ''
    },
    dts: {
        resource: '/api/11527/tableschema/',
        path: 'typings/servicenow.d.ts',
        refs: [
            'index.d.ts'
        ],
        ignoreFields: [
            'sys_id',
            'sys_created_on',
            'sys_created_by',
            'sys_updated_on',
            'sys_updated_by',
            'sys_mod_count'
        ]
    }
}