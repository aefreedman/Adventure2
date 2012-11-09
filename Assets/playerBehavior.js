#pragma strict

private var controller : CharacterController;
var speed : float;

function Start () {
	controller = gameObject.GetComponent(CharacterController);
	}

function Update () {
	controller.SimpleMove(speed * Vector3.right * Input.GetAxis("Horizontal") + speed * Vector3.forward * Input.GetAxis("Vertical"));
	}




