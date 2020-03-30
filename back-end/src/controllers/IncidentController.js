import connection from '../database/connection';
export default {


  async index( req, res){
    const [count] = await connection('incidents').count();
    console.log(count['count(*)'])

    res.header('X-Total-Count', (count['count(*)']));

    const {page = 1} = req.query;
    const incidents = await connection('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);


    if(!incidents[0]) {
      return res.status(400).json({"error": "no such incidents to this ong"});
    };
    return res.json(incidents);
  },


  async create(req,res){
    const {title, description, value} = req.body;
    const {authorization:ong_id} = req.headers;
    const response = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    })

    return res.json({response});

  },
  async delete(req, res){
    const {authorization:ong_id} = req.headers;
    const{id}= req.params;

    const [incident] = await connection('incidents').where('id', id).select("*");

    if (!incident)
      return res.status(400).json({error: "incident not exists"})


    if (incident.ong_id !== ong_id)
    return res.status(401).json({error: "Operation not permited"});


    await connection('incidents').where('id', id).del();
    return res.status(201).send();
  },
}
