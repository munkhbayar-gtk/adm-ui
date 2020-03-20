export const env = {
  API_URL : 'https://my-api',
  production: false,
  mode: 'Local',
  getApiUrl : function() {
    return this.API_URL;
  }
}