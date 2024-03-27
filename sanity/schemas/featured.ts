export default {
    title: "Featured",
    name: "featured",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string"
        },
        {
            title: "Image",
            name: "image",
            type: "image",
            options: {hotspot: true},
            fields: [
                {
                    title: 'Alt',
                    name: 'alt',
                    type: 'string'
                }
            ]
        }
    ]
}