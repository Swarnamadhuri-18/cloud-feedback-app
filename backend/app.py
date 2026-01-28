from flask import Flask, request, jsonify
import datetime

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_feedback():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    feedback = data.get("feedback")
    timestamp = datetime.datetime.now().isoformat()

    print("---- New Feedback ----")
    print("Name:", name)
    print("Email:", email)
    print("Feedback:", feedback)
    print("Time:", timestamp)

    return "Feedback submitted successfully!"

@app.route('/')
def health_check():
    return "Backend is running"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)

