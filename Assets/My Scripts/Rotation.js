#pragma strict

var rotationX : float = 0;
var rotationY : float = 0;
var rotationZ : float = 0;

function Start () {

}

function Update () {
	transform.Rotate(rotationX, rotationY, rotationZ);

}