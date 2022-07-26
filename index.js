export default ({
    domain = 'db.ht',
    namespace, 
    token,
}) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    return {
        get: (key) => fetch(`https://${domain}/${namespace}/${key}`, { headers }).then(res => res.json()),
        set: (key, value) => fetch(`https://${domain}/${namespace}/${key}`, { headers }).then(res => res.json()),
    }
}