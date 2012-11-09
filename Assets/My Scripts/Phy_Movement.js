#pragma strict

var forceX : float = 0;
var forceY : float = 0;
var forceZ : float = 0;

function Start () {

}

function FixedUpdate () {
	
	rigidbody.AddForce(Vector3(forceX, forceY, forceZ));

}