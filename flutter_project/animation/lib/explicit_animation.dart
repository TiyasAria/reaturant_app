import 'package:flutter/material.dart';

class AnimationExplicit extends StatefulWidget {
  const AnimationExplicit({Key? key}) : super(key: key);

  @override
  _AnimationExplicitState createState() => _AnimationExplicitState();
}

class _AnimationExplicitState extends State<AnimationExplicit> with TickerProviderStateMixin {
  late AnimationController _controller ;
  late AnimationController _iconController ;
  bool _isRotating = false ;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _controller = AnimationController(
        vsync: this,
      duration: Duration(seconds: 3)
    );

    _iconController = AnimationController(
        vsync: this,
      duration:  Duration(seconds: 1)
    );
  }

  @override
  void dispose() {
    // TODO: implement dispose
    _controller.dispose();
    _iconController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Animasi Implicit'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            RotationTransition(
                turns: _controller ,
              child: Container(
                padding: EdgeInsets.all(20),
                child: FlutterLogo(
                  size: 100,
                ),
              ),
            ),
            IconButton(
              iconSize: 36,
                icon: AnimatedIcon(
                    icon: AnimatedIcons.play_pause,
                    progress: _iconController
                ), onPressed: () {
                if (_isRotating) {
                  _controller.stop();
                  _iconController.reverse();
                } else {
                  _controller.repeat();
                  _iconController.forward();
                }

                _isRotating = !_isRotating;

            },)
          ],
        ),
      ),
    );
  }
}
