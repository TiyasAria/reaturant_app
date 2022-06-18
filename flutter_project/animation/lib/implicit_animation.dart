import 'package:flutter/material.dart';

class AnimationPage extends StatefulWidget {
  const AnimationPage({Key? key}) : super(key: key);

  @override
  _AnimationPageState createState() => _AnimationPageState();
}

class _AnimationPageState extends State<AnimationPage> {
  bool _isBig = false ;
  double size = 150.0 ;


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
            AnimatedContainer(
              width: size,
              height: size,
              color: Colors.pink,
              duration: Duration(seconds: 2),
            ),
            ElevatedButton(
                onPressed: () {
                  setState(() {
                    size = _isBig ? 300 : 150 ;
                    _isBig = !_isBig ;
                  });
                },
                child: Text('Animate')
            )
          ],
        ),
      ),
    );
  }
}
