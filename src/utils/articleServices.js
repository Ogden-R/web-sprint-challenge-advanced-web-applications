import axiosWithAuth from './axiosWithAuth';

const articleService = ()=> {
    axiosWithAuth()
        .get(`http://localhost:5000/api/articles`)
        .then(res => {
            const serviceRes = res.data;
            // console.log(serviceRes);
            return serviceRes;
        })
        .catch(err => {
            console.log(err);
        })
}

export default articleService;

