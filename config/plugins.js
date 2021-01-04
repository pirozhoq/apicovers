module.exports = ({ env }) => ({
	upload: {
		provider: 'aws-s3',
		providerOptions: {
			accessKeyId: 'AKIAUNKULL3NRDH53RXT',
			secretAccessKey: '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',
			region: 'eu-central-1',
			params: {
				Bucket: 'strapi-apicovers',
			},
		},
	},
});