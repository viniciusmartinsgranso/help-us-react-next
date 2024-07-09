export interface TextInputInterface {
  image: string;
  value: string;
  onChange: (value: any) => void;
  placeholder: string;
  type?: string;
}