import 'package:flutter/material.dart';

class Calculator extends StatelessWidget {
  final Color backgroundColor ;
  final Color foregroundColor ;
  IconData? icon ;
  final String text ;
  final void Function() onTap;

  Calculator({
    required this.backgroundColor,
    required this.foregroundColor,
    required this.text,
    required this.onTap,
    this.icon
});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        color: backgroundColor,
        child: Center(
          child:  icon == null
              ?  Text (text ,
          style:  Theme.of(context).textTheme.headline4?.copyWith(color: foregroundColor),)
              : Icon(icon, color: foregroundColor,)
        ) ,
      ),
    );
  }
}
