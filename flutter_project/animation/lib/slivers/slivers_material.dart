import 'package:flutter/material.dart';

class PixelPage extends StatelessWidget {
  const PixelPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NestedScrollView(
          headerSliverBuilder: (context , isScroll){
            return [
              SliverAppBar(
                expandedHeight: 200,
              )
            ]
          },
          body: body),
    );
  }
}
