// ENV
const env = 'production' // 'development' or 'production'

// WXAPP VERSION
const version = 2.0

// development and production host
const hosts = {
    development: 'http://127.0.0.1:3192',
    test: 'https://bbc.genesysinfo.net/test',
    production: 'https://bbc.genesysinfo.net'
}

// apis
const api = {
    user: {
        /**
         * login api
         * need header:
         * {
         *   'x-wechat-code': code,
         *   'x-wechat-encrypted': encryptedData,
         *   'x-wechat-iv': iv
         * }
         */
        accountlogin: {
            method: 'POST',
            url: '/api/BanUsers/login'
        },
        login: {
            method: 'POST',
            url: '/WXXCX/login'
        },
        one: {
            method: 'GET',
            url: '/api/BanUsers/'
        },
        list: {
            method: 'GET',
            url: '/api/BanUsers/aggregate'
        },
        store: {
            method: 'POST',
            url: '/api/BanUsers'
        },
        apply: {
            method: 'PUT',
            url: '/api/BanUsers/'
        },
        deleteRole: {
            method: 'DELETE',
            url: '/api/BanUsers/role/'
        },
        addRole: {
            method: 'PUT',
            url: '/api/BanUsers/role/'
        },
        listIncludeTaskBydate: {
            method: 'GET',
            url: '/api/BanUsers/includeTaskBydate/'
        },
        listTaskData: {
            method: 'GET',
            url: '/api/BanUsers/userListWithTaskData/'
        },
        taskData: {
            method: 'GET',
            url: '/api/BanUsers/taskData/'
        },
        transferOneMember: {
            method: 'PUT',
            url: '/api/BanUsers/transferOneMember/'
        },
        memberBuildTeam: {
            method: 'PUT',
            url: '/api/BanUsers/memberBuildTeam/'
        },
        leaderBuildTeam: {
            method: 'PUT',
            url: '/api/BanUsers/leaderBuildTeam/'
        },
        transferAllMember: {
            method: 'PUT',
            url: '/api/BanUsers/transferAllMember/'
        },
        memberCount: {
            method: 'GET',
            url: '/api/BanUsers/memberCount/'
        },
    },
    userranking:{
        list: {
            method: 'GET',
            url: '/api/BanUserRankings'
        },
    },
    tasklog: {
        aggregate: {
            method: 'GET',
            url: '/api/BanTaskLogs/aggregate'
        },
        date: {
            method: 'GET',
            url: '/api/BanTaskLogs/'
        },
        period: {
            method: 'GET',
            url: '/api/BanTaskLogs/period/'
        },
        week: {
            method: 'GET',
            url: '/api/BanTaskLogs/weekdate/'
        },
        workhour: {
            method: 'GET',
            url: '/api/BanTaskLogs/workhour/'
        }
    },
    configs: {
        method: 'GET',
        url: '/v2/configs'
    }
}

const roleMapping = {
    '6': '队长',
    '5': '管理员',
    '4': '设计员',
    '3': '复核员',
    '2': '队员',
    '7': '大队长',
    '8': '审核员',
    '9': '超级管理员'
}
module.exports = {
    env,
    version,
    api: disposeUrl(api, hosts[env]),
    host: hosts[env],
    roleMapping
}

function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(v => {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url
        } else {
            obj[v] = disposeUrl(obj[v], prefix)
        }
    })

    return obj
}
