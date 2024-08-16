from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///orders.db'
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(100))
    quantity = db.Column(db.Integer)

class OrderSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Order

order_schema = OrderSchema()
orders_schema = OrderSchema(many=True)

@app.route('/order', methods=['POST'])
def add_order():
    product_name = request.json['product_name']
    quantity = request.json['quantity']
    new_order = Order(product_name=product_name, quantity=quantity)
    db.session.add(new_order)
    db.session.commit()
    return order_schema.jsonify(new_order)

@app.route('/orders', methods=['GET'])
def get_orders():
    all_orders = Order.query.all()
    return orders_schema.jsonify(all_orders)

if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', port=5002)
