from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL
import random

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = 'quiz'

mysql = MySQL(app)


@app.route('/questions', methods=['GET'])
def get_questions():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM `table`")
    questions = cur.fetchall()
    questions = list(questions)
    cur.close()
    final_questions = []
    # Shuffle questions and options
    random.shuffle(questions)
    for question in questions:
        temp = [question[1], question[6]]
        options = list(question[2:6])
        random.shuffle(options)
        temp.append(options)
        final_questions.append(temp)
    return jsonify(final_questions)


@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()['data']
    # print(data)
    question = data[0]
    option1 = data[1]
    option2 = data[2]
    option3 = data[3]
    option4 = data[4]
    answer = data[5]
    cur = mysql.connection.cursor()
    cur.execute(
        f"INSERT INTO `table` (`id`, `question`, `option1`, `option2`, `option3`, `option4`, `answer`) VALUES (NULL, '{question}', '{option1}', '{option2}', '{option3}', '{option4}', '{answer}');")
    mysql.connection.commit()
    return {'status': 'success'}


if __name__ == '__main__':
    app.run(debug=True)
