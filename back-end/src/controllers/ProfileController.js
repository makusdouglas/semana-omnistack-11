import connection from '../database/connection';

export default {
  async index(req, res){
    const {authorization:ong_id} = req.headers;
    const response = await connection('incidents')
    .where('ong_id', ong_id)
    .select('*');
    return res.json({response});


  }
}
