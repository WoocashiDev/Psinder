from flask_restx import Namespace, Resource, fields
from models import Profile
from flask_jwt_extended import jwt_required
from flask import request

profile_ns = Namespace("profile", description="A namespace for Profiles")

profile_model = profile_ns.model(
    "Profile",
    {
        "password": fields.String(),
        "nickname": fields.String(),
        "dog_name": fields.String(),
        "age": fields.Integer(),
        "description": fields.String(),
        "title_img": fields.String(),
        "other_imgs": fields.String(),
        "likes": fields.String(),
        "dislikes": fields.String(),
        "matches": fields.String(),
    },
)


@profile_ns.route("/hello")
class HelloResource(Resource):
    """api test"""

    def get(self):
        return {"message": "hello world"}


@profile_ns.route("/profiles")
class ProfilesResource(Resource):
    @profile_ns.marshal_list_with(profile_model)
    def get(self):
        """get all profiles"""
        profiles = Profile.query.all()
        return profiles, 201

    @profile_ns.marshal_with(profile_model)
    @profile_ns.expect(profile_model)
    @jwt_required()
    def post(self):
        """create new profile"""
        data = request.get_json()
        new_profile = Profile(
            password=data.get("password"),
            nickname=data.get("nickname"),
            dog_name=data.get("dog_name"),
            age=data.get("age"),
            description=data.get("description"),
            title_img=data.get("title_img"),
            other_imgs=data.get("other_imgs"),
            likes=data.get("likes"),
            dislikes=data.get("dislikes"),
            matches=data.get("matches"),
        )
        new_profile.save()
        return new_profile, 201


@profile_ns.route("/profiles/<int:id>")
class ProfilesResource(Resource):
    @profile_ns.marshal_with(profile_model)
    def get(self, id):
        """get particular profile"""
        profile = Profile.query.get_or_404(id)
        return profile, 201

    @jwt_required()
    @profile_ns.marshal_with(profile_model)
    def delete(self, id):
        """delete particular profile"""
        profile_to_delete = Profile.query.get_or_404(id)
        profile_to_delete.delete()
        return profile_to_delete, 201

    @jwt_required()
    @profile_ns.marshal_with(profile_model)
    def put(self, id):
        """update particular profile"""
        profile_to_update = Profile.query.get_or_404(id)
        data = request.get_json()
        profile_to_update.update(
            data.get("nickname"),
            data.get("dog_name"),
            data.get("age"),
            data.get("description"),
            data.get("title_img"),
            data.get("other_imgs"),
            data.get("likes"),
            data.get("dislikes"),
            data.get("matches"),
        )
        return profile_to_update, 201
