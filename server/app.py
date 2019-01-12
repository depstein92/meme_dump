from flask import Flask
from db import db
from flask_restful import Api
from flask_jwt import JWT
from flask_cors import CORS

from resources.security import authenticate, identity
from resources.user_register import UserRegister
from resources.user_login import UserLogin
from resources.jobs_register import JobsRegister
from resources.user_data import UserData
from resources.skills_register import SkillsRegister
# from resources.jobs_register import JobsList

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db' #sqllite is exchangeable
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #turns off extensions
app.config['SQLALCHEMY_ECHO'] = True
api = Api(app)
CORS(app)


@app.before_first_request
def create_tables():
    db.create_all()

jwt = JWT(app, authenticate, identity)

api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(JobsRegister, '/jobs')
api.add_resource(UserData, '/user_data/<string:username>')
api.add_resource(SkillsRegister, '/skills')
# api.add_resource(JobsList, '/get')


# api.add_resource(Item, '/item/<string:name>')
# api.add_resource(ItemList, '/items')
# api.add_resource(UserRegister, '/register')


if __name__ == "__main__":
    from db import db
    db.init_app(app)
    app.run(host="0.0.0.0", debug=True, port=5000)
