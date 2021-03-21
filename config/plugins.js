// module.exports = ({ env }) => ({
// 	upload: {
// 		provider: 'aws-s3',
// 		providerOptions: {
// 			accessKeyId: 'AKIAUNKULL3NRDH53RXT',
// 			secretAccessKey: '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',
// 			region: 'eu-central-1',
// 			params: {
// 				Bucket: 'strapi-apicovers',
// 			},
// 		},
// 	},
// });

module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    },
  },
});
