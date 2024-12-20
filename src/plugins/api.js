import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzgwNjRhOTFjZTlmZjk4MDA5ZjRlMmQ2YjRlZDc3ZCIsIm5iZiI6MTczMTM1MzQyNC41MDQ5OTk5LCJzdWIiOiI2NzMyNWI1MDY4OTVmMzgyMmU0NjBmMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ShM7-TLX6Xd5sJqLUNOddGCokncGCZx3sVyAM4QlKV8`,
  },
});

export default api;