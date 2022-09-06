from cmath import log
import unittest
from main import create_app
from config import TestConfig
from exts import db


class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app(TestConfig)
        self.client = self.app.test_client(self)

        with self.app.app_context():
            db.init_app(self.app)

            db.create_all()

    def test_hello_world(self):
        hello_response = self.client.get("/profile/hello")

        json = hello_response.json

        self.assertEqual(json, {"message": "hello world"})

    def test_signup(self):
        signup_response = self.client.post(
            "/auth/signup",
            json={
                "username": "testuser",
                "email": "testuser@test.com",
                "password": "password",
            },
        )

        status_code = signup_response.status_code
        self.assertEqual(status_code, 201)

    def test_login(self):
        signup_response = self.client.post(
            "/auth/signup",
            json={
                "username": "testuser",
                "email": "testuser@test.com",
                "password": "password",
            },
        )

        login_response = self.client.post(
            "/auth/login",
            json={
                "username": "testuser",
                "password": "password",
            },
        )
        status_code = login_response.status_code
        self.assertEqual(status_code, 201)

    def test_get_all_profiles(self):
        """Test getting all profiles"""

        response = self.client.get("/profile/profiles")
        status_code = response.status_code
        self.assertEqual(status_code, 201)

    def test_get_one_profile(self):
        signup_response = self.client.post(
            "/auth/signup",
            json={
                "username": "testuser",
                "email": "testuser@test.com",
                "password": "password",
            },
        )

        login_response = self.client.post(
            "/auth/login",
            json={
                "username": "testuser",
                "password": "password",
            },
        )

        response = self.client.get("/profile/profiles/1")
        status_code = response.status_code
        self.assertEqual(status_code, 404)

    def test_create_profile(self):
        signup_response = self.client.post(
            "/auth/signup",
            json={
                "username": "testuser",
                "email": "testuser@test.com",
                "password": "password",
            },
        )

        login_response = self.client.post(
            "/auth/login",
            json={
                "username": "testuser",
                "password": "password",
            },
        )

        access_token = login_response.json["access_token"]

        create_profile_response = self.client.post(
            "/profile/profiles",
            json={
                "password": "testPassword",
                "nickname": "TestNick",
                "dog_name": "TestSniffer",
                "age": 3,
                "description": "Test dog",
                "title_img": "google.pl",
                "other_imgs": "wp.pl, onet.pl",
            },
            headers={"Authorization": f"Bearer {access_token}"},
        )
        status_code = create_profile_response.status_code
        self.assertEqual(status_code, 201)
        print(create_profile_response.json)

    def test_update_profile(self):
        signup_response = self.client.post(
            "/auth/signup",
            json={
                "username": "testuser",
                "email": "testuser@test.com",
                "password": "password",
            },
        )

        login_response = self.client.post(
            "/auth/login",
            json={
                "username": "testuser",
                "password": "password",
            },
        )

        access_token = login_response.json["access_token"]

        create_profile_response = self.client.post(
            "/profile/profiles",
            json={
                "password": "testPassword",
                "nickname": "TestNick",
                "dog_name": "TestSniffer",
                "age": 3,
                "description": "Test dog",
                "title_img": "google.pl",
                "other_imgs": "wp.pl, onet.pl",
            },
            headers={"Authorization": f"Bearer {access_token}"},
        )

        edit_profile_response = self.client.put(
            "/profile/profiles/1",
            json={
                "password": "testPassword",
                "nickname": "Testerro",
                "dog_name": "TestSniffer",
                "age": 3,
                "description": "Test dog",
                "title_img": "google.pl",
                "other_imgs": "wp.pl, onet.pl",
            },
            headers={"Authorization": f"Bearer {access_token}"},
        )
        status_code = edit_profile_response.status_code
        self.assertEqual(status_code, 201)
        print(edit_profile_response.json)

    def test_delete_profile(self):
        signup_response = self.client.post(
            "/auth/signup",
            json={
                "username": "testuser",
                "email": "testuser@test.com",
                "password": "password",
            },
        )

        login_response = self.client.post(
            "/auth/login",
            json={
                "username": "testuser",
                "password": "password",
            },
        )

        access_token = login_response.json["access_token"]

        create_profile_response = self.client.post(
            "/profile/profiles",
            json={
                "password": "testPassword",
                "nickname": "TestNick",
                "dog_name": "TestSniffer",
                "age": 3,
                "description": "Test dog",
                "title_img": "google.pl",
                "other_imgs": "wp.pl, onet.pl",
            },
            headers={"Authorization": f"Bearer {access_token}"},
        )

        remove_profile_response = self.client.delete(
            "/profile/profiles/1",
            headers={"Authorization": f"Bearer {access_token}"},
        )
        status_code = remove_profile_response.status_code
        self.assertEqual(status_code, 201)
        print(remove_profile_response.json)

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()


if __name__ == "__main__":
    unittest.main()
