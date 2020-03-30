import crypto from 'crypto';
import connection from '../database/connection';
export default {
  async index( req, res){
    const ongs = await connection('ongs').select("*");
    if(ongs[0]) {
      return res.json(ongs);
    };
    return res.status(400)
    .json({"error": "no such ongs in database"});
  },
  async create(req, res){

    const {name,
          email,
          whatsapp,
          city,
          uf
    } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

     const response = await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    console.log(response)
      return res.status(200).json({
        id
    });
  },
  async delete(req, res){
    const {id} = req.body;
    const response = await connection('ongs').where('id', id).del();
    return res.json({
      response
    })
  }
}
