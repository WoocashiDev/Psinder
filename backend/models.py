from exts import db

"""
class profile:
    id: int primary key
    password:
    nickname: str
    dog_name: str
    age: int
    description: text
    title_img:
    other_imgs:
    likes:
    dislikes:
    matches:
"""


class Profile(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    password = db.Column(db.String(), nullable=False)
    nickname = db.Column(db.String(), nullable=False)
    dog_name = db.Column(db.String(), nullable=False)
    age = db.Column(db.Integer(), nullable=False)
    description = db.Column(db.Text(), nullable=True)
    title_img = db.Column(db.Text(), nullable=True)
    other_imgs = db.Column(db.Text(), nullable=True)
    likes = db.Column(db.Text(), nullable=True)
    dislikes = db.Column(db.Text(), nullable=True)
    matches = db.Column(db.Text(), nullable=True)

    def __repr__(self):
        return f"<Profile {self.dog_name} >"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(
        self,
        nickname,
        dog_name,
        age,
        description,
        title_img,
        other_imgs,
        likes,
        dislikes,
        matches,
    ):
        self.nickname = nickname
        self.dog_name = dog_name
        self.age = age
        self.description = description
        self.title_img = title_img
        self.other_imgs = other_imgs
        self.likes = likes
        self.dislikes = dislikes
        self.matches = matches

        db.session.commit()


# user model

"""
class User:
    id: int
    username:string
    email:string
    password:string
"""


class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(), nullable=False, unique=True)
    email = db.Column(db.String(), nullable=False)
    password = db.Column(db.Text(), nullable=False)

    def __repr__(self):
        return f"<User {self.username}>"

    def save(self):
        db.session.add(self)
        db.session.commit()
